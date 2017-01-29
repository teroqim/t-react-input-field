import React from 'react'

class InputField extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showInfoBubble: false,
      showInfoBox: false,
      value: '',
    }
  }

  getValue(){
    return this.state.value
  }

  clear(){
    this.setState({value: ''})
  }

  onBlur(){
    this.setState({showInfoBubble: false, showInfoBox: false})
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  onChange(e){
    this.setState({value: e.target.value})
    if (this.props.onChange) {
      this.props.onChange(e.target.value)
    }
  }

  onFocus(){
    this.setState({showInfoBubble: true})
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  onKeyPress(e){
    if (e.key === 'Enter' && this.props.onEnter) {
      if (this.props.onEnter) {
        this.props.onEnter(e.target.value)
      }
    }
  }

  onMouseOverInfoBubble(){
    this.setState({showInfoBox: true})
  }

  onMouseOutInfoBubble(){
    this.setState({showInfoBox: false})
  }

  render(){
    var type = 'text'
    if (this.props.password) {
      type = 'password'
    }

    var inputClassName = this.props.inputClassName
    if (this.props.showError) {
      inputClassName += ' err'
    }

    var info = null
    if (this.props.infoBubbleText && this.state.showInfoBubble) {
      info = (
        <div>
          <div className='info-bubble'
            onMouseOver={this.onMouseOverInfoBubble.bind(this)}
            onMouseOut={this.onMouseOutInfoBubble.bind(this)}></div>
          {
            this.state.showInfoBox ?
              <div className='info-box'>{this.props.infoBubbleText}</div>
              : null
          }
        </div>
      )
    }

    var wrapperClass = 'input-field-wrapper'
    if (this.props.wrapperClass) {
      wrapperClass += ' ' + this.props.wrapperClass
    }

    var preText = null
    if (this.props.preText) {
      preText = <div className='pre-text'>{this.props.preText}</div>
    }

    return (
      <div className={wrapperClass}>
        <input
          autoComplete={this.props.autoComplete || 'off'}
          className={inputClassName}
          onBlur={this.onBlur.bind(this)}
          onChange={this.onChange.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
          placeholder={this.props.placeholder}
          ref='input'
          type={type}
          value={this.state.value}
          />
        {info}
        {preText}
      </div>
    )
  }

  setFocus(){
    this.refs.input.focus()
  }
}

InputField.propTypes = {
  showError: React.PropTypes.bool,
  password: React.PropTypes.bool,
  className: React.PropTypes.string,
  onEnter: React.PropTypes.func,
  infoBubbleText: React.PropTypes.string,
  preText: React.PropTypes.string,
}

class PasswordField extends React.Component {
  render(){
    var type = 'text'
    if (this.props.password) {
      type = 'password'
    }
    return (
      <InputField
        {...this.props}
        password={true}
        />
    )
  }
}

export default InputField
export {InputField, PasswordField}
