let number = parseInt(prompt('Nhập vào số lớn hơn không: '))
tong = 0;
for(let i = 1; i < number+1; i++){
    tong = tong +i
}
document.write(`tong tu 1 den ${number} = ${tong}`)