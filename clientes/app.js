var controle = 0;
$(".alerta").click(function (e) {
	e.preventDefault();
	$(this).fadeOut(800);
});

$("#txtTelefone").mask("(00)00009-0000");

function previewFile(input) {
	$("#previewImg").fadeOut(100);
	$("#imagemAtual").css("filter", "blur(5px)");
	$("#previewImg").css("filter", "blur(0px)");
	var file = $("input[type=file]").get(0).files[0];

	if (file) {
		var reader = new FileReader();

		reader.onload = function () {
			$("#previewImg").attr("src", reader.result);
		};

		reader.readAsDataURL(file);
	}
	$("#previewImg").fadeIn(800);
}

function excluir(codigo) {
	opcao = confirm("Deseja excluir o registro " + codigo + "?");
	if (opcao == true) {
		$.ajax({
			type: "get",
			url: "excluir.php?codigo=" + codigo,
			success: function (response) {
				location.reload();
			},
		});
	}
}

$("#formPesquisar").submit(function (e) {
	e.preventDefault();
	texto = document.querySelector("#txtPesquisar").value;
	$.ajax({
		type: "post",
		url: "pesquisar.act.php",
		data: { texto: texto },
		success: function (response) {
			$("#resultadosPesquisa").html(response);
		},
	});
});

function limparPesquisa() {
	$("#resultadosPesquisa").html("");
	document.querySelector("#txtPesquisar").value = "";
	document.querySelector("#txtPesquisar").focus();
}

function verificaPreenchimento(senha1, senha2) {
	if (senha1 != "" && senha2 != "" && senha1 === senha2) {
		return true;
	} else {
		alert("As senhas não conferem!");
		document.querySelector("#txtSenha1").focus();
		return false;
	}
}

function verificaSenha(senha1, senha2) {
	if (senha1 != "" && senha2 != "" && senha1 === senha2) {
		document.querySelector("#txtSenha1").classList.remove("campoInvalido");
		document.querySelector("#txtSenha2").classList.remove("campoInvalido");
		document.querySelector("#txtSenha1").classList.add("campoValido");
		document.querySelector("#txtSenha2").classList.add("campoValido");
	} else {
		document.querySelector("#txtSenha1").classList.add("campoInvalido");
		document.querySelector("#txtSenha2").classList.add("campoInvalido");
		document.querySelector("#txtSenha1").classList.remove("campoValido");
		document.querySelector("#txtSenha2").classList.remove("campoValido");
	}
}

//após acrescentar essa função a senha está sendo gravada vazia, verificar!
function verificaForm() {
	form = document.querySelector("#formAddCliente");
	var controle = 0;
	$("input:not([type=submit])").each(function (index, element) {
		if (element.value == "") {
			$(element).addClass("campoInvalido");
			controle++;
		} else {
			$(element).removeClass("campoInvalido");
		}

	});
	//verificar se o email já foi utilizado
	var emailVer = document.querySelector('input[name=email');
	$.ajax({
				async : false,
				type: "post",
				url: "verificaEmail.php",
				data: { email: emailVer.value },
				success: function (response) {
					if(response == "true"){
						controle++;
						console.log("Email já utilizado");
						emailVer.classList.add('campoInvalido');
					}
				},
	});
	console.log("Controle: "+controle);
	if (controle > 0) {
		console.log("Controle: " + controle);
		return false;
	} else {
		return true;
	}
}

function pesquisar(texto) {
	console.log(texto);
	$.ajax({
		type: "post",
		url: "pesquisar.act.php",
		data: { texto: texto },
		success: function (response) {
			$("#resultadosPesquisa").html(response);
		},
	});
}
function verificaFormAlt() {
	form = document.querySelector("#formAddCliente");
	var controle = 0;
	$("input:not([type=submit])","input:not([type=image])").each(function (index, element) {
		if (element.value == "") {
			$(element).addClass("campoInvalido");
			
			controle++;
		} else {
			
			$(element).removeClass("campoInvalido");
		}
		

	});
	
	console.log("Controle: "+controle);
	if (controle > 0) {
		console.log("Controle: " + controle);
		return false;
	} else {
		return true;
	}
}
