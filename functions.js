function formatCEP(cep) {
        cep = cep.toString().replace(/[^0-9]/g, '')
        if(cep.length>5){
            cep = cep.slice(0, 5) + '-' + cep.slice(5)
        }
        if(cep.length>9){
            cep = cep.slice(0, 9)
        }
        return cep
    }

    function formatFone(fone) {
        fone = fone.toString().replace(/[^0-9]/g, '')
        if(fone.length>0){
            fone = '(' +fone
        }
        if(fone.length>3){
            fone = fone.slice(0, 3) + ') ' + fone.slice(3)
        }
        if(fone.length>10){
            fone = fone.slice(0, 10) + '-' + fone.slice(10)
        }
        if(fone.length>15){
            fone = fone.slice(0, 15)
        }
        return fone
    }
