    var cepV = 0
    function formatCEP(cep) {
        cep = cep.toString().replace(/[^0-9]/g, '')
        if (cep.length > 5) {
            cep = cep.slice(0, 5) + '-' + cep.slice(5)
        } if (cep.length == 6) {
            if (cepV == 0) {
                cep = cep.slice(0, 5) + '-' + cep.slice(5)
                cepV = 1
            } else if (cepV == 1) {
                cep = cep.replace('-', '')
                cepV = 0
            }
        } else if (cep.length > 9) {
            cep = cep.slice(0, 9).replace('-', '')
            cep = cep.slice(0, 5) + '-' + cep.slice(5)
        }
    
        return cep
    }
