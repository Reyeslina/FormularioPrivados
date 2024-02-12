import 'cypress-file-upload';

describe('formularios privados', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://oficina-virtual-qa.frcol.io/login');
    cy.contains('a', 'Iniciar sesión').click();
    cy.get('#username').type('nayih76376@jobbrett.com');
    cy.get('#kc-login').click();
    cy.wait(1000)
    cy.get('#password').type('123456789');
    cy.get('#kc-login').click();
  });

  it('Publicación venta casa', () => {
    cy.get('#downshift-0-input').type('Cali'); // Escribe el texto en el campo de búsqueda
    cy.get('#downshift-0-item-0').contains('Cali').click(); // Haz clic en la opción deseada en la lista    
    cy.wait(4000);
    cy.get('#downshift-14-input').type('CL 1 # 66 - 96');
    cy.get('#downshift-14-item-0').contains('CL 1 # 66 - 96').click();
    cy.wait(2000);
    cy.get('#downshift-15-input').type('la cascada')
    .type('{downarrow}')
    .type('{enter}');
    cy.get('#downshift-2-toggle-button').type ('Venta')
      cy.get('#downshift-1-toggle-button').type ('Apartamento')
    .type('{downarrow}')
    cy.get('#area').type('220');
    cy.get('._root_rx2td_77 > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').type('Esta es una prueba automatizada');

   
   
   
    cy.readFile('C:\\Users\\LinaReyes\\Desktop\\Formulario_Privados\\cypress\\fixtures\\2.jpg', 'binary').then((fileContent) => {
      cy.get('._file-input_tq5al_92').attachFile({
        fileContent,
        fileName: '2.jpg',
        mimeType: 'image/jpg'
      });
    });

    cy.get('._root_3x6hv_77 > ._root_12hkc_1').click();
    
    
   
  });
});