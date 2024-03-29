import NavComponent from './componets/nav-comp'

class HomePage {
    open() {
        return browser.url('/');
    }
    get btnGetStarted() {
        return $("[id=get-started]");
    }
    get imageLogo () {
        return $('//img[@alt="Practice E-Commerce Site"]');
    }
    get textHeading () {
        return $(".elementor-widget-container h1");
    }
    
    get NavComponent() {
        return NavComponent;
    }
}

export default new HomePage();