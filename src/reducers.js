const update = require('immutability-helper')

const changeRunningState = ({ running }, state) => {
  return update(state, { running: { $set: running } })
}

const updateCode = ({ srcCode }, state) => {
  return update(state, { srcCode: { $set: srcCode } })
}

const updateWorkspace = ({ workspace }, state) => {
  return update(state, { workspace: { $set: workspace } })
}

const updateCanvas = ({ canvas }, state) => {
  return update(state, {canvas: { $set: canvas }})
}

module.exports = {
  changeRunningState,
  updateCode,
  updateWorkspace,
  updateCanvas
}
