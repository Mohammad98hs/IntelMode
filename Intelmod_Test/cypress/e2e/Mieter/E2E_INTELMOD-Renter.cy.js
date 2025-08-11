describe("Open Url Scenarion",async()=>{

    before("open url ", ()=>{

        cy.visit("http://localhost:4200/#/")

    })

    //Home Page

    it('Validate "Homepage" of "INTELMOD-Renter"',()=>{

        cy.xpath("//h1[text()='IMP - Energetische Sanierung']").should('have.text',"IMP - Energetische Sanierung")

    })

    it('Validate Text of Webpage',()=>{

         cy.xpath("//h4[text()='Willkommen bei IMP – Gemeinsam energetisch sanieren!']").should('have.text',"Willkommen bei IMP – Gemeinsam energetisch sanieren!")
     
    })

    it('Validate "Starte jetzt! " Button',()=>{
    
         cy.xpath("//button[text()='Starte jetzt! ']").click();

    })

  // Einführung

    it('Validate Texts of Webpage for page "Einführung"',()=>{

         cy.xpath("//h1[text()='Einführung']").should('have.text',"Einführung")  

         cy.xpath("//h3[text()=' Ihre Feedback-Möglichkeiten ']").should('have.text'," Ihre Feedback-Möglichkeiten ")

         cy.xpath("//h4[text()='Bestätigung']").should('have.text',"Bestätigung")

         cy.xpath("//h4[text()='Ablehnen']").should('have.text',"Ablehnen")

         cy.xpath("//h4[text()='Kommentar']").should('have.text',"Kommentar")

         cy.xpath("//h4[text()='Korrekturvorschläge']").should('have.text',"Korrekturvorschläge")

         cy.xpath("//h4[text()='Alternativvorschlag']").should('have.text',"Alternativvorschlag")

         cy.xpath("//h3[text()=' Hilfe-Funktionen ']").should('have.text'," Hilfe-Funktionen ")

         cy.xpath("//h4[text()='Info-Tooltip']").should('have.text',"Info-Tooltip")

         cy.xpath("//h4[text()='Seiten-Info']").should('have.text',"Seiten-Info")

         cy.xpath("//h4[text()='Chatbot']").should('have.text',"Chatbot")

    })
    
    it('Validate " Weiter " Button',()=>{
        
         cy.xpath("(//button[text()=' Weiter '])[1]").click();

    })

    // page Angaben zum Gebäude

    it('Validate "Angaben zum Gebäude" Page of "INTELMOD-Renter"',()=>{

         cy.xpath("//h2[text()='Angaben zum Gebäude']").should('have.text',"Angaben zum Gebäude")

    })

    it('Validate "Angaben zur Adresse" field',()=>{

         cy.xpath("(//button[@mdbtooltip='Sie möchten die Angabe korrigieren korrigieren'])[1]").click();
         cy.xpath("(//input[@placeholder='Bitte geben Sie Ihre Straße ein.'])[1]").clear().type("Finkenau")
         cy.xpath("(//button[@mdbtooltip='Sie bestätigen die (ggfs. korrigierte) Angabe'])[1]").click()

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Sie möchten die Angabe korrigi'])[2]").click();
         cy.xpath("(//input[@placeholder='Bitte geben Sie Ihre Straße ein.'])[2]").clear().type("35")
         cy.xpath("(//button[@mdbtooltip='Sie bestätigen die (ggfs. korrigierte) Angabe'])[2]").click();

         cy.xpath("(//button[@mdbtooltip='Sie möchten die Angabe korrigieren korrigieren'])[3]").click();
         cy.xpath("//input[@placeholder='Bitte geben Sie Ihre Postleitzahl ein.']").clear().type("22081")
         cy.xpath("(//button[@mdbtooltip='Sie bestätigen die (ggfs. korrigierte) Angabe'])[3]").click();

         cy.xpath("(//button[@mdbtooltip='Sie möchten die Angabe korrigieren korrigieren'])[4]").click();

         cy.get("#city").clear().type("Hamburg")

         cy.xpath("(//button[@mdbtooltip='Sie bestätigen die (ggfs. korrigierte) Angabe'])[4]").click();
    })

        

    

    it('Validate "Angaben zum Gebäude" field',()=>{

         cy.xpath("//legend[text()='Angaben zum Gebäude']").should('have.text',"Angaben zum Gebäude")
        
         cy.xpath("//button[@mdbtooltip='Hilfe zur Bestimmung des Baujahres']").click();
         cy.xpath("//h5[text()='Baujahrhilfe']").should('have.text',"Baujahrhilfe")
         cy.xpath("(//button[@type='button'])[4]").click();
        
         cy.xpath("(//button[@mdbtooltip='Sie möchten die Angabe korrigieren korrigieren'])[5]").click();
         cy.xpath("//input[@placeholder='Bitte geben Sie das Baujahr ein']").clear().type("1905");
         cy.xpath("(//button[@mdbtooltip='Sie bestätigen die (ggfs. korrigierte) Angabe'])[5]").click();

         cy.xpath("(//button[@mdbtooltip='Sie möchten die Angabe korrigieren korrigieren'])[6]").click();
         cy.xpath("//input[@placeholder='Bitte geben Sie die Gesamtwohnfläche ein']").clear().type("750");
         cy.xpath("(//button[@mdbtooltip='Sie bestätigen die (ggfs. korrigierte) Angabe'])[6]").click();

         cy.xpath("(//button[@mdbtooltip='Sie möchten die Angabe korrigieren korrigieren'])[7]").click();
         cy.get("#energySource").select('Gas');
         cy.xpath("//div[@ng-reflect-mdb-tooltip='Sie bestätigen die (ggfs. korr']").click();

    })

    it('Validate " Weiter " Button',()=>{

         cy.xpath("(//button[text()=' Weiter '])[2]").click();

    })

    //Angaben zur Wohnung

    it('Validate "Angaben zur Wohnung" Page of "INTELMOD-Renter"', ()=>{

         cy.xpath("//h2[text()='Angaben zur Wohnung']").should('have.text',"Angaben zur Wohnung")

    })

    it('Validate "Angaben zur Wohnung" field',()=>{
        
         cy.xpath(" //legend[text()='Angaben zur Wohnung']").should('have.text',"Angaben zur Wohnung")

         cy.xpath("( //button[@ng-reflect-mdb-tooltip='Sie möchten die Angabe korrigi'])[1]").click();
         cy.xpath("//input[@placeholder='Bitte geben Sie die Bezeichnung Ihrer Wohnung ein.']").clear().type("UG Links")
         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Sie bestätigen die (ggfs. korr'])[1]").click();

         cy.xpath("( //button[@ng-reflect-mdb-tooltip='Sie möchten die Angabe korrigi'])[2]").click();
         cy.xpath("//input[@placeholder='Bitte geben Sie die Größe Ihrer Wohnung ein.']").clear().type("190")
         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Sie bestätigen die (ggfs. korr'])[2]").click();

    })


    it('Validate "Angaben zur Person" field',()=>{

         cy.xpath("//legend[text()='Angaben zur Person']").should('have.text',"Angaben zur Person")

         cy.xpath("( //button[@ng-reflect-mdb-tooltip='Sie möchten die Angabe korrigi'])[3]").click();
         cy.xpath("//input[@placeholder='Bitte geben Sie Ihren Vornamen ein']").clear().type("Mohammad")
         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Sie bestätigen die (ggfs. korr'])[3]").click();

         cy.xpath("( //button[@ng-reflect-mdb-tooltip='Sie möchten die Angabe korrigi'])[4]").click();
         cy.xpath("//input[@placeholder='Bitte geben Sie Ihren Nachnamen ein']").clear().type("Hassan")
         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Sie bestätigen die (ggfs. korr'])[4]").click();

    })
    
    
    it('Validate " Weiter " Button',()=>{

         cy.xpath("(//button[text()=' Weiter '])[2]").click();

    })


    //Vorhabensübersicht_F_Dämmung

    it('Validate "Vorhabensübersicht" Page of "INTELMOD-Renter-1"', ()=>{

         cy.xpath("//h2[text()='Vorhabensübersicht']").should('have.text',"Vorhabensübersicht")

    })

    it('Validate "Fassadendämmung" Button', ()=>{

         cy.xpath("//span[text()='Fassadendämmung']").click();

    })

    it('Validate "Bestandsdetails" Button', ()=>{

         cy.xpath("(//span[text()=' Bestandsdetails '])[1]").click();

    })

    //Bestandsaufnahme_Wand

    it('Validate "Bestandsaufnahme der zu modernisierenden Wand" Page of "INTELMOD-Renter"', ()=>{

         cy.xpath("//h2[text()='Bestandsaufnahme der zu modernisierenden Wand']").should('have.text',"Bestandsaufnahme der zu modernisierenden Wand")

    })

    it('Validate "Bestandsaufnahme der zu modernisierenden Wand" field', ()=>{

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[1]").click();
         cy.xpath("//input[@ng-reflect-placeholder='Bauteilfläche eingeben']").clear().type("25")
         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Bestätigen Sie die Angabe'])[1]").click();

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[2]").click();
         cy.xpath('//select[@formcontrolname="gebaeudeseite"]').select('Gartenseite');
         cy.xpath("(//div[@ng-reflect-mdb-tooltip='Bestätigen Sie Ihre Auswahl be'])[1]").click();

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[3]").click();
         cy.xpath('//select[@formcontrolname="himmelsrichtung"]').select('sued');
         cy.xpath("(//div[@ng-reflect-mdb-tooltip='Bestätigen Sie Ihre Auswahl be'])[2]").click();

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[4]").click();
         cy.xpath('//select[@formcontrolname="wandaufbau"]').select('skelett');
         cy.xpath("(//div[@ng-reflect-mdb-tooltip='Bestätigen Sie Ihre Auswahl be'])[3]").click();

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[5]").click();
         cy.xpath('//select[@formcontrolname="material"]').select('leichtbeton');
         cy.xpath("(//div[@ng-reflect-mdb-tooltip='Bestätigen Sie Ihre Auswahl be'])[4]").click();

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[6]").click();
         cy.xpath("//input[@ng-reflect-placeholder='U-Wert eingeben']").clear().type("1.7")
         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Bestätigen Sie die Angabe'])[2]").click();

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[7]").click();
         cy.xpath('//select[@formcontrolname="bereitsModernisiert"]').select('nein');
         cy.xpath("(//div[@ng-reflect-mdb-tooltip='Bestätigen Sie Ihre Auswahl be'])[5]").click();

    })

    it('Validate " Weiter " Button', ()=>{

         cy.xpath("(//button[text()=' Weiter '])[3]").click();

    })


    //Modernisierungs_M anlegen

    it('Validate "Modernisierungsmaßnahme anlegen" Page of "INTELMOD-Renter"', ()=>{

         cy.xpath("//h1[text()='Modernisierungsmaßnahme anlegen']").should('have.text',"Modernisierungsmaßnahme anlegen")

    })


    it('Validate "Massnahmenvorschlag annehmen" Button 1', ()=>{

        cy.xpath("//button[span[text()='Massnahmenvorschlag annehmen']]").click();
       //await cy.get('.mb-2 > span').click()

    })



    //Vorhabensübersicht_Gerüstaufbau

    it('Validate "Vorhabensübersicht" Page of "INTELMOD-Renter-2"', ()=>{

         cy.xpath("//h2[text()='Vorhabensübersicht']").should('have.text',"Vorhabensübersicht")

    })

    it('Validate "Gerüstaufbau" Button', ()=>{

         cy.xpath("//span[text()='Gerüstaufbau']").click();

    })

    it('Validate "Bestandsdetails" Button', ()=>{

         cy.xpath("(//span[text()=' Bestandsdetails '])[2]").click();

    })

    it('Validate "Bestandsaufnahme der zu modernisierenden Wand" Page of "INTELMOD-Renter"', ()=>{

         cy.xpath("//h2[text()='Bestandsaufnahme der zu modernisierenden Wand']").should('have.text',"Bestandsaufnahme der zu modernisierenden Wand")

    })


    it('Validate "Bestandsaufnahme der zu modernisierenden Wand" field', ()=>{

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[1]").click();
         cy.xpath("//input[@ng-reflect-placeholder='Bauteilfläche eingeben']").clear().type("30")
         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Bestätigen Sie die Angabe'])[1]").click();

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[2]").click();
         cy.xpath('//select[@formcontrolname="gebaeudeseite"]').select('strassenseite');
         cy.xpath("(//div[@ng-reflect-mdb-tooltip='Bestätigen Sie Ihre Auswahl be'])[1]").click();

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[3]").click();
         cy.xpath('//select[@formcontrolname="himmelsrichtung"]').select('Nord');
         cy.xpath("(//div[@ng-reflect-mdb-tooltip='Bestätigen Sie Ihre Auswahl be'])[2]").click();

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[4]").click();
         cy.xpath('//select[@formcontrolname="wandaufbau"]').select('massiv');
         cy.xpath("(//div[@ng-reflect-mdb-tooltip='Bestätigen Sie Ihre Auswahl be'])[3]").click();

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[5]").click();
         cy.xpath('//select[@formcontrolname="material"]').select('sandstein');
         cy.xpath("(//div[@ng-reflect-mdb-tooltip='Bestätigen Sie Ihre Auswahl be'])[4]").click();

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[6]").click();
         cy.xpath("//input[@ng-reflect-placeholder='U-Wert eingeben']").clear().type("1.7")
         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Bestätigen Sie die Angabe'])[2]").click();

         cy.xpath("(//button[@ng-reflect-mdb-tooltip='Korrigieren Sie diese Angabe'])[7]").click();
         cy.xpath('//select[@formcontrolname="bereitsModernisiert"]').select('ja');
         cy.xpath("(//div[@ng-reflect-mdb-tooltip='Bestätigen Sie Ihre Auswahl be'])[5]").click();

    })


    it('Validate " Weiter " Button', ()=>{

         cy.xpath("(//button[text()=' Weiter '])[3]").click();

    })


    it('Validate "Modernisierungsmaßnahme anlegen" Page of "INTELMOD-Renter"', ()=>{

         cy.xpath("//h1[text()='Modernisierungsmaßnahme anlegen']").should('have.text',"Modernisierungsmaßnahme anlegen")

    })

    it('Validate "Massnahmenvorschlag annehmen" Button 2', ()=>{


         cy.xpath("//span[text()='Massnahmenvorschlag annehmen']").click();

    })


    //Vorhabensübersicht

    it('Validate "Vorhabensübersicht" Page of "INTELMOD-Renter-3"', ()=>{

         cy.xpath("//h2[text()='Vorhabensübersicht']").should('have.text',"Vorhabensübersicht")

    })

    it('Validate " Weiter " Button', ()=>{

         cy.xpath("(//button[text()=' Weiter '])[3]").click();

    })


    //Überprüfen_Angaben

    it('Validate "Überprüfen der Angaben" Page of "INTELMOD-Renter"', ()=>{

         cy.xpath("//h2[text()='Bitte überprüfen Sie Ihre Angaben:']").should('have.text',"Bitte überprüfen Sie Ihre Angaben:")

    })

    it('Validate " Weiter " Button', ()=>{

         cy.xpath("(//button[text()=' Weiter '])[4]").click();

    })


    //Übersicht_Maßnahmen

    it('Validate "Übersicht der ausgewählten Maßnahmen" Page of "INTELMOD-Renter"', ()=>{

         cy.xpath("//h2[text()='Übersicht der ausgewählten Maßnahmen']").should('have.text',"Übersicht der ausgewählten Maßnahmen")

    })

    it('Validate "Gerüstaufbau" Button', ()=>{

         cy.get('#mat-expansion-panel-header-9 > .mat-content > .mat-expansion-panel-header-title > .mat-icon').click();

    })

    it('Validate "Bauteilfunktionen (Balken-Diagramm)" Button', ()=>{

         cy.xpath("//span[text()=' Bauteilfunktionen (Balken-Diagramm) ']").click();

    })

    it('Validate "Nachhaltigkeit (Balken-Diagramm)" Button', ()=>{

         cy.xpath("//span[text()=' Nachhaltigkeit (Balken-Diagramm) ']").click();

    })

    it('Validate " Weiter " Button', ()=>{

         cy.xpath("(//button[text()=' Weiter '])[4]").click();
 
    })
        

    //Kosten&Einsparungen

    it('Validate "Kosten und Einsparungen des Vorhabens" Page of "INTELMOD-Renter"', ()=>{

         cy.xpath("//h2[text()='Kosten und Einsparungen des Vorhabens']").should('have.text',"Kosten und Einsparungen des Vorhabens")

    })

    it('Validate " Weiter " Button', ()=>{

         cy.xpath("(//button[text()=' Weiter '])[4]").click();

    })


    //Geschafft!

    it('Validate "Geschafft!" Page of "INTELMOD-Renter"', ()=>{

         cy.xpath("//h3[text()='Geschafft!']").should('have.text',"Geschafft!")

    })

    it('Validate Text of Webpage', ()=>{

         cy.xpath("//p[text()='Vielen Dank für Ihre Teilnahme! Ihre Änderungen wurden erfolgreich an Ihren Vermieter übermittelt!.']").should('have.text',"Vielen Dank für Ihre Teilnahme! Ihre Änderungen wurden erfolgreich an Ihren Vermieter übermittelt!.")

    })
})
