sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/booksui2/test/integration/FirstJourney',
		'ns/booksui2/test/integration/pages/BooksList',
		'ns/booksui2/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/booksui2') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);