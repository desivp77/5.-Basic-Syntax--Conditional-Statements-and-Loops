function language(country) {
    switch (country) {

            case `USA`: ;
            case `England`: console.log('English');
            break;
            case `Spain`: ;
            case `Argentina`: ;
            case `Mexico`: console.log('Spanish');
            break;

                default: console.log(`unknown`);

    }
}

// language('USA')
// language('England')

language('Spain')
language('Argentina')
language('Mexico')
// language('Germany')