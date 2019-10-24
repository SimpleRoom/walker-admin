import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Button from '../CustomButtons/CustomButtons'
// import Icon from '../Icon/Icon'
import { getDialog } from '../../store/modules/common/selector'
import { displaySetDialog } from '../../store/modules/common/action'
import styles from './Dialog.module.scss'

const onBackgroundClickHandler = props => () => {
  const { backgroundClosable, close, hideAction } = props
  if (backgroundClosable) {
    hideAction(close)
  }
}

const onCloseClickHandler = props => () => {
  const { close, hideAction } = props
  hideAction(close)
}

// 内容組件
const DialogContent = (props) => {
  const {
    title = '提示',
    content,
    showCancel = false,
    showConfirm = true,
    showClose = true,
    cancelText = '取消',
    submitText = '確定',
    className,
    cancel,
    submit,
    close,
    style,
    hideAction,
    size = 'normal',
    backgroundClosable = false,
  } = props
  const Content = content
  return (
    <Fragment>
      <div className={styles.background} onClick={onBackgroundClickHandler(props)} />
      <div style={style} className={`${styles.dialogContainer} ${styles[size]} ${className || ''}`}>
        <h2>{title}</h2>
        {typeof content === 'string' ? <pre>{content}</pre> : <Content />}
        {(showCancel || showConfirm) && (
          <div className={styles.buttonsBox}>
            {showCancel && (
              <Button onClick={() => hideAction(cancel)} status="general" size="lg">
                {cancelText}
              </Button>
            )}
            {showConfirm && (
              <Button size="lg" onClick={() => hideAction(submit)}>
                {submitText}
              </Button>
            )}
          </div>
        )}
        {/* {showClose ? (
          <Icon onClick={onCloseClickHandler(props)} className={styles.closeButton} type="ic_close" />
        ) : null} */}
      </div>
    </Fragment>
  )
}

DialogContent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.string]).isRequired,
  showCancel: PropTypes.bool,
  showConfirm: PropTypes.bool,
  showClose: PropTypes.bool,
  backgroundClosable: PropTypes.bool,
  cancelText: PropTypes.string,
  submitText: PropTypes.string,
  className: PropTypes.string,
  cancel: PropTypes.func,
  submit: PropTypes.func,
  close: PropTypes.func,
  hideAction: PropTypes.func.isRequired,
  style: PropTypes.object,
  size: PropTypes.string,
}

const mapStateToProps = state => ({
  dialog: getDialog(state),
})

const mapDispatchToProps = {
  displaySetDialog,
}

class Dialog extends React.Component {
  static propTypes = {
    dialog: PropTypes.object,
    displaySetDialog: PropTypes.func,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.dialog.displayed !== prevState.showDialog) {
      return {
        showDialog: nextProps.dialog.displayed,
      }
    }
    return null
  }

  constructor(props) {
    super(props)
    this.state = {
      showDialog: false,
    }
  }

  hideAction = (method) => {
    this.$contaier.classList.remove(styles.onShow)
    this.props.displaySetDialog({}, false)
    setTimeout(() => {
      this.dialogData = null
      this.setState(
        {
          showDialog: false,
        },
        () => {
          if (method) {
            setTimeout(method, 50)
          }
        }
      )
    }, 400)
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { showDialog } = this.state
    const { dialog } = nextProps

    if (nextState.showDialog) {
      this.dialogData = dialog
      setTimeout(() => {
        this.$contaier.classList.add(styles.onShow)
      }, 50)
    }

    return showDialog !== nextState.showDialog
  }

  render() {
    const { showDialog } = this.state
    return (
      <div
        style={{
          display: showDialog ? 'block' : 'none',
        }}
        className={styles.dialogMaskContainer}
        ref={$contaier => (this.$contaier = $contaier)}
      >
        {showDialog ? <DialogContent {...this.dialogData} hideAction={this.hideAction} /> : null}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog)
