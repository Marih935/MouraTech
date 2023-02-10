function preco_final(precoProduto, formaPagamento){
    switch(formaPagamento){
        case 1:
            precoProduto = precoProduto - precoProduto * 0.15
            precoProduto = precoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            return precoProduto
        case 2:
            precoProduto = precoProduto - precoProduto * 0.10
            precoProduto = precoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            return precoProduto
        case 3:
            precoProduto = precoProduto - precoProduto * 0.05
            precoProduto = precoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            return precoProduto
        case 4:
            precoProduto = precoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            return precoProduto
    }
}