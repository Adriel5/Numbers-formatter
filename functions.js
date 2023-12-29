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

    function formatCPF(cpf) {
        cpf = cpf.toString().replace(/[^0-9]/g, '')
        if(cpf.length>3){
            cpf = cpf.slice(0,3) + '.' + cpf.slice(3)
        }
        if(cpf.length>7){
            cpf = cpf.slice(0,7)+'.' + cpf.slice(7)
        }
        if(cpf.length>11){
            cpf = cpf.slice(0,11) + '-' +cpf.slice(11)
        }
        if(cpf.length>14){
            cpf = cpf.slice(0, 14)
        }
        return cpf
    }

    function formatCNPJ(cnpj) {
        cnpj = cnpj.toString().replace(/[^0-9]/g, '')
        if(cnpj.length>2){
            cnpj = cnpj.slice(0,2) + '.' + cnpj.slice(2)
        }
        if(cnpj.length>6){
            cnpj = cnpj.slice(0, 6)+'.'+cnpj.slice(6)
        }
        if(cnpj.length>10){
            cnpj = cnpj.slice(0, 10) + '/' + cnpj.slice(10)
        }
        if(cnpj.length>15){
            cnpj = cnpj.slice(0, 15) + '-' +cnpj.slice(15)
        }
        if(cnpj.length>18){
            cnpj = cnpj.slice(0, 18)
        }
        return cnpj
    }

    function formatRG(rg){
        rg = rg.toString().replace(/[^0-9]/g, '')
        if(rg.length>10){
            rg = rg.slice(0,10)
        }
        return rg
    }
