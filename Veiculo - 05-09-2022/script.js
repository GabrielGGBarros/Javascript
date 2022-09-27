let marca, modelo, ano, cor, km, fipe = "";

document.getElementById("veiculo").addEventListener('click', function(){
    marca = document.getElementById("marca_veiculo").value;
    modelo = document.getElementById("modelo_veiculo").value;
    ano = document.getElementById("ano_veiculo").value;
    cor = document.getElementById("cor_veiculo").value;
    km = document.getElementById("km_veiculo").value;
    fipe = document.getElementById("fipe_veiculo").value;

    console.log('marca veiculo',marca,'modelo veiculo',modelo,'ano veiculo',ano,'cor veiculo',cor,'km veiculo',km,'fipe veiculo',fipe);
})
