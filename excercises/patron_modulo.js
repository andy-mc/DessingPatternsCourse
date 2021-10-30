const print = console.log

const modulo = {
  prop: 'propiedad_de_mi_modulo',
  config: {
    language: 'es',
    cache: true
  },
  setConfig: function(new_config) {
    console.log('this:', this)
    console.log('modulo:', modulo)
    console.log('>>>', modulo == this)
    console.log('>>>>>>', modulo === this)
    modulo.config = new_config
  },
  isCacheEnabled: () => {
    console.log(modulo.config.cache ? 'si' : 'no')
  }
}

modulo.setConfig({cache: false})
modulo.isCacheEnabled({cache: false})
print(modulo)