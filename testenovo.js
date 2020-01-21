Feature('@TESTENOVO');
/*###Validar dados de acesso
*/

//Objetivo do cenário: validar cpf

Scenario('Cenário abrir', (I) => {
    //Abre a página desejada 
    I.amOnPage('https://serasaconsumidor.com.br');
    I.wait(5);
    });

Scenario('Cenário Entrar', (I) => {
    //Clica no botão Entrar 
      I.click('Entrar');
      I.wait(5);
    
});

Scenario('Cenário Confirmar', (I) => {
    //Clica no botão confirmar, sem a informação do CPF.  
     I.click('Confirmar');
    I.waitForText('Por favor preencha seu CPF.');
    I.wait(2);
    
});

Scenario('Cenário CPF inválido', (I) => {
    //Informa um cpf inválido e clica em confirmar   
    I.fillField('cpf','112233')
    I.click('Confirmar');
    I.waitForText('Você precisa informar um CPF válido.');
    I.wait(2);
    
});

Scenario('Cenário CPF Válido', (I) => {
    //Informa um cpf válido e clica em confirmar, deverá abrir o campo senha.  
    I.fillField('cpf','00654405956')
    I.click('Confirmar');
    I.waitForText('Digite sua senha');
    
});
