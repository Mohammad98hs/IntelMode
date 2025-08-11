describe("Open Url Scenarion",function(){

    before("open url ", ()=>{

        cy.visit("http://localhost:4200/#/")
    })

    //Homepage

    it('Validate "Homepage" of "INTELMOD-Landlord"',()=>{

         cy.xpath("//p[text()='home component!']").should('have.text',"home component!")

    })

     it('Validate "create_new_folder" Button',()=>{
        
         cy.xpath("//mat-icon[text()='create_new_folder']").click();

    })

    //Fall Anlegen

    it('Validate "Fall Anlegen" Page of "INTELMOD-Landlord"',()=>{

         cy.xpath("//h1[text()='Mieter:in oder Vermieter:in?']").should('have.text',"Mieter:in oder Vermieter:in?")

    })

    it('Validate "Vermieter:in" Button',()=>{

         cy.xpath("//span[text()='Vermieter:in']").click();

    })
        
    //Einführung

     it('Validate Texts of Webpage for page "Einführung"',()=>{

         cy.xpath("//h1[text()='Einführung']").should('have.text',"Einführung")
         cy.xpath("//h5[text()='Das Funktionale Kostensplitting']").should('have.text',"Das Funktionale Kostensplitting")
         cy.xpath("//h5[text()='Hilfe-Tools']").should('have.text',"Hilfe-Tools")
         cy.xpath("//span[text()='Seiten-Panel Hilfe']").should('have.text',"Seiten-Panel Hilfe")
         cy.xpath("//span[text()='Chatbot']").should('have.text',"Chatbot")
    })

    it('Validate " Weiter " Button-1',()=>{

         cy.xpath("(//span[text()=' Weiter '])[1]").click();

    })

    //Beratungsanliegen

    it('Validate "Beratungsanliegen" Page of "INTELMOD-Landlord"',()=>{

         cy.xpath("//h1[text()='Beratungsanliegen']").should('have.text',"Beratungsanliegen")

    })

    it('Validate "Modernisierungsankündigung verfassen" Button',()=>{

         cy.xpath("//label[@class='option-card']").click();

    })

    it('Validate " Weiter " Button-2',()=>{

         cy.xpath("(//span[text()=' Weiter '])[1]").click();

    })

    //Bestandsaufnahme Gebäude

    it('Validate "Bestandsaufnahme Gebäude" Page of "INTELMOD-Landlord"',()=>{

         cy.xpath("(//h1[text()='Bestandsaufnahme Gebäude'])").should('have.text',"Bestandsaufnahme Gebäude")

    })

    it('Validate "Bestandsaufnahme Gebäude" field',()=>{

         cy.xpath("//input[@placeholder='Baujahr']").clear().type("1960")
         cy.xpath("//input[@placeholder='Straße']").clear().type("Finkenaustraße")
         cy.xpath("//input[@placeholder='Hausnummer']").clear().type("12b")
         cy.xpath("//input[@placeholder='PLZ']").clear().type("12345")
         cy.xpath("//input[@placeholder='Ort']").clear().type("Hamburg")
         cy.xpath("//input[@placeholder='860, 1200, ...']").clear().type("900")
         cy.get("#mat-select-value-1").click();
         cy.xpath("//span[text()=' Heizöl ']").click();

    })
    
    it('Validate " Weiter " Button-3',()=>{

         cy.xpath("(//span[text()=' Weiter '])[2]").click();

    })
        
    //Wohnungen&Mieterinnen anlegen

    it('Validate "Wohnungen und Mieter:innen anlegen" Page of "INTELMOD-Landlord"',()=>{

         cy.xpath("(//h1[text()='Wohnungen und Mieter:innen anlegen'])").should('have.text',"Wohnungen und Mieter:innen anlegen")

    })

    it('Validate Text of Webpage " Wohnung 1"',()=>{

         cy.xpath("(//h6[text()=' Wohnung 1 '])").contains("Wohnung 1")
 
    })
    
    it('Validate "Wohnung 1" field',()=>{

         cy.xpath("(//input[contains(@id,'mat-input-')])[1]").clear().type("EG Links");
         cy.xpath("(//input[contains(@id,'mat-input-')])[2]").clear().type("Max Muster");
         cy.xpath("(//input[contains(@id,'mat-input-')])[3]").clear().type("120");

    })

    it('Validate Text of Webpage " Wohnung 2"',()=>{

         cy.xpath("(//h6[text()=' Wohnung 2 '])").contains("Wohnung 2")

    })
    
    it('Validate "Wohnung 2" field',()=>{

         cy.xpath("(//input[contains(@id,'mat-input-')])[4]").clear().type("OG Mitte");
         cy.xpath("(//input[contains(@id,'mat-input-')])[5]").clear().type("Mohammad HHS");
         cy.xpath("(//input[contains(@id,'mat-input-')])[6]").clear().type("105");

    })

    it('Validate " Wohnung hinzufügen " Button',()=>{

         cy.xpath("(//span[text()=' Wohnung hinzufügen '])").click();
         cy.wait(6000);

    })

    it('Validate Text of Webpage " Wohnung 3"',()=>{

         cy.xpath("(//h6[text()=' Wohnung 3 '])").contains("Wohnung 3")

    })

    it('Validate "Wohnung 3" field',()=>{

         cy.xpath("(//mat-label[text()='Wohnungsbezeichnung'])[3]").click();
         cy.xpath("(//input[contains(@id,'mat-input-')])[7]").type("EG Mitte");
         cy.xpath("(//mat-label[text()='Name der Mietpartei'])[3]").click();
         cy.xpath("(//input[contains(@id,'mat-input-')])[8]").type("Hassan");
         cy.xpath("(//input[contains(@id,'mat-input-')])[9]").clear().type("140");

    })

    it('Validate "delete_forever" Button',()=>{

         cy.xpath("(//mat-icon[text()=' delete_forever'])[3]").click();

    })

    it('Validate " Weiter " Button-4',()=>{

         cy.xpath("(//span[text()=' Weiter '])[2]").click();

    })
        
    //Modernisierungsvorhaben

    it('Validate "Modernisierungsvorhaben" Page of "INTELMOD-Landlord"-1',()=>{

         cy.xpath("(//h1[text()='Modernisierungsvorhaben'])").should('have.text',"Modernisierungsvorhaben")

    })

    it('Validate " Vorhaben hinzufügen " Button',()=>{

         cy.xpath("(//span[text()=' Vorhaben hinzufügen '])").click();

    })

    //Bauteilauswahl

    it('Validate "Bauteilauswahl" Page of "INTELMOD-Landlord"',()=>{

         cy.xpath("(//h1[text()='Bauteilwahl'])").should('have.text',"Bauteilwahl")

    })

    it('Validate "Zauberstab" Button',()=>{

         cy.xpath("//label[input[@ng-reflect-value='wand']]").click();

    })

    it('Validate " Weiter " Button-5',()=>{

         cy.xpath("(//span[text()=' Weiter '])[3]").click();

    })
        	
    //Bestandsaufnahme Wand

    it('Validate "Bestandsaufnahme der zu modernisierenden Wand" Page of "INTELMOD-Landlord"',()=>{

         cy.xpath("(//h1[text()='Bestandsaufnahme der zu modernisierenden Wand'])").should('have.text',"Bestandsaufnahme der zu modernisierenden Wand")

    })

    it('Validate "Bestandsaufnahme der zu modernisierenden Wand" field',()=>{

         cy.xpath("(//mat-label[text()='Bezeichnung'])").click();
         cy.xpath("(//input[contains(@id,'mat-input-')])[7]").type("Wand 1");

         cy.xpath("(//mat-label[text()='Gesamtfläche (in m²):'])").click();
         cy.xpath("(//input[contains(@id,'mat-input-')])[8]").type("140");

         cy.get("#mat-select-value-3").click();
         cy.xpath("//span[text()='Hof-/ Gartenseite']").click();

         cy.get("#mat-select-value-5").click();
         cy.xpath("//span[text()='Nord']").click();

         cy.get("#mat-select-value-7").click();
         cy.xpath("//span[text()='Skelettbauweise']").click()

         cy.get("#mat-select-value-9").click();
         cy.xpath("//span[text()='Porenbeton']").click();

         cy.get("#mat-select-value-11").click();
         cy.xpath("//span[text()='Nein']").click();

         cy.xpath("(//mat-label[text()='U-Wert:'])").click();
         cy.xpath("(//input[contains(@id,'mat-input-')])[9]").type("50");

    })

    it('Validate " Weiter " Button-6',()=>{

         cy.xpath("(//span[text()=' Weiter '])[3]").click();

    })

    //Modernisierungsmaßnahme anlegen

    it('Validate "Modernisierungsmaßnahme anlegen" Page of "INTELMOD-Landlord"-1',()=>{

         cy.xpath("(//h1[text()='Modernisierungsmaßnahme anlegen'])").should('have.text',"Modernisierungsmaßnahme anlegen")

    })

    it('Validate "Maßnahme aus Katalog wählen" Button',()=>{

         cy.xpath("(//span[text()='Maßnahme aus Katalog wählen'])").click();

    })

    //Maßnahmenkatalog

    it('Validate "Maßnahme aus Katalog wählen" Button',()=>{

         cy.xpath("(//h1[text()='Maßnahmenkatalog'])").should('have.text',"Maßnahmenkatalog")

    })

    it('Validate and select "WDVS Polystyrol mit Putz" Button',()=>{

         cy.xpath("(//input[contains(@id,'mat-radio-4-input')])").click();

    })

    it('Validate "Mit markierter Maßnahme fortfahren" Button-1',()=>{

         cy.xpath("(//span[text()=' Mit markierter Maßnahme fortfahren '])").click();

    })

        
    //Modernisierungsmaßnahme_anlegen

    it('Validate "Modernisierungsmaßnahme anlegen" Page of "INTELMOD-Landlord"-2',()=>{

         cy.xpath("(//h1[text()='Modernisierungsmaßnahme anlegen'])").should('have.text',"Modernisierungsmaßnahme anlegen")

    })

    it('Validate " Weiter " Button-7',()=>{

         cy.xpath("(//span[text()=' Weiter '])[3]").click();

    })

    //Maßnahme im Vergleich

    it('Validate "Maßnahme im Vergleich" Page of "INTELMOD-Landlord"',()=>{

         cy.xpath("(//h1[text()='Maßnahme im Vergleich'])").should('have.text',"Maßnahme im Vergleich")

    })

    it('Validate "Mit markierter Maßnahme fortfahren" Button-2',()=>{

         cy.xpath("(//span[text()=' Mit markierter Maßnahme fortfahren '])").click();

    })

    //Modernisierungsvorhaben_

    it('Validate "Modernisierungsvorhaben" Page of "INTELMOD-Landlord"-2',()=>{

         cy.xpath("(//h1[text()='Modernisierungsvorhaben'])").should('have.text',"Modernisierungsvorhaben")

    })

    it('Validate " Weiter " Button-8',()=>{

         cy.xpath("(//span[text()=' Weiter '])[3]").click();

    })
    
    //Übersicht Kostenverteilung

    it('Validate "Übersicht über die Kostenverteilung" Page of "INTELMOD-Landlord"',()=>{

         cy.xpath("(//h1[text()='Übersicht über die Kostenverteilung'])").should('have.text',"Übersicht über die Kostenverteilung")

    })

    it('Validate "Weiter zur Zusammensetzung der Kosten" Button',()=>{

         cy.xpath("(//span[text()=' Weiter zur Zusammensetzung der Kosten '])").click();

    })

    //Übersicht Kosten

    it('Validate "Übersicht über die Zusammensetzung der Kosten" Page of "INTELMOD-Landlord"',()=>{

         cy.xpath("(//h1[text()='Übersicht über die Zusammensetzung der Kosten'])").should('have.text',"Übersicht über die Zusammensetzung der Kosten")

    })

    it('Validate "Weiter zur Modernisierungsankündigung" Button',()=>{

         cy.xpath("(//span[text()=' Weiter zur Modernisierungsankündigung '])").click();

    })

    //Anschreiben generieren

    it('Validate Texts of Webpage for page "Anschreiben generieren"',()=>{
    
         cy.xpath("(//h1[text()='Anschreiben generieren'])").should('have.text',"Anschreiben generieren")
         cy.xpath("//th[text()='Wohnungsbezeichnung']").should('have.text',"Wohnungsbezeichnung")
         cy.xpath("//th[text()='Name Mietspartei']").should('have.text',"Name Mietspartei")
         cy.xpath("//th[text()='Wohnungsgröße']").should('have.text',"Wohnungsgröße")
         cy.xpath("//th[text()='Mtl. Mieterhöhung']").should('have.text',"Mtl. Mieterhöhung")
         cy.xpath("//th[text()='Ankündigungsdatei']").should('have.text',"Ankündigungsdatei")
        
    })

    it('Validate "Ankündigung verschicken" Button',()=>{

         cy.xpath("(//span[text()=' Ankündigung verschicken '])").click();

    })

})


  
      