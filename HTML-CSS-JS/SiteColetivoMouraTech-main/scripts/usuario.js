let usuarios=['admin,123'];
function login()
{
    console.log(usuarios);
    const email=document.getElementById("femail").value;
    const senha=document.getElementById("fsenha").value;
    if(email.length==0 || senha.length==0)
    {
        alert("Preencha todos os campos");
    }
    else
    {
        let encontrou=0;
        const dadosUsuario=email+","+senha;
        for (i = 0; i < usuarios.length; i++) 
        {
            if(dadosUsuario===usuarios[i])
            {
                encontrou=1;
                window.location.href="bemvindo.html";
                break;
            }
        }
        if(encontrou===0)
        {
            alert("Usuário ou senha inválidos")
        }
    }
}

function cadastrar()
{
    const nome=document.getElementById("nome").value;
    const email=document.getElementById("email").value;
    const senha1=document.getElementById("senha1").value;
    const senha2=document.getElementById("senha2").value;
    if(nome.length==0 || email.length==0 || senha1.length==0 || senha2.length==0)
    {
        alert("Preencha todos os campos");
    }
    else
    {
        if(senha1!=senha2)
        {
            alert("As senhas digitas não conferem");
        }
        else
        {
            window.location.href="bemvindo.html";
        }
    }
}