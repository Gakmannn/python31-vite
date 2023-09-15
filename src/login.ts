function login(type:string, placeholder:string) {
  const input = document.createElement('input')
  input.type = type
  input.placeholder = placeholder
  input.addEventListener('input', function() {
    const isAlert = !(this.value.includes('@') && this.value.includes('.') && this.value.length > 5 )
    if (isAlert) {
      this.classList.add('alert')
    } else {
      this.classList.remove('alert')
    }
    const event = new CustomEvent('valueChange', { 
      detail: {
        val:this.value,
        isAlert
      }, 
      bubbles:true 
    })
    this.dispatchEvent(event)
  })
  return input
}

export {login}