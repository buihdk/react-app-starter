/* eslint-disable */
const JSDom = require('jsdom')
const JestUtil = require('jest-util')
const mock = require('jest-mock')

const { FakeTimers, installCommonGlobals } = JestUtil

class JSDOMEnvironment {
  constructor(config, options = {}) {
    this.dom = new JSDom.JSDOM(
      '<!doctype html><html><body><div id="root"></div></body><script></script></html>',
      Object.assign(
        {
          pretendToBeVisual: true,
          runScripts: 'dangerously',
          url: config.testURL,
          virtualConsole: new JSDom.VirtualConsole().sendTo(options.console || console)
        },
        config.testEnvironmentOptions
      )
    )

    this.global = this.dom.window.document.defaultView
    const global = this.global
    // Node's error-message stack size is limited at 10, but it's pretty useful
    // to see more than that when a test fails.
    this.global.Error.stackTraceLimit = 100
    installCommonGlobals(global, config.globals)

    this.moduleMocker = new mock.ModuleMocker(global)

    const timerConfig = {
      idToRef: id => id,
      refToId: ref => ref
    }

    this.fakeTimers = new FakeTimers({
      config,
      global,
      moduleMocker: this.moduleMocker,
      timerConfig
    })
  }

  setup() {
    return Promise.resolve()
  }

  teardown() {
    if (this.fakeTimers) {
      this.fakeTimers.dispose()
    }

    if (this.global) {
      this.global.close()
    }

    this.global = null
    this.document = null
    this.fakeTimers = null
    return Promise.resolve()
  }

  runScript(script) {
    if (this.dom) {
      return this.dom.runVMScript(script)
    }

    return null
  }
}

module.exports = JSDOMEnvironment
