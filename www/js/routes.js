angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.firstAidApp', {
    url: '/landing',
    views: {
      'tab1': {
        templateUrl: 'templates/firstAidApp.html',
        controller: 'firstAidAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.tasks'
      2) Using $state.go programatically:
        $state.go('tabsController.tasks');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /dashboard/tab1/tasks
      /dashboard/tab2/tasks
  */
  .state('tabsController.tasks', {
    url: '/tasks',
    views: {
      'tab1': {
        templateUrl: 'templates/tasks.html',
        controller: 'tasksCtrl'
      },
      'tab2': {
        templateUrl: 'templates/tasks.html',
        controller: 'tasksCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.timers'
      2) Using $state.go programatically:
        $state.go('tabsController.timers');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /dashboard/tab1/timers
      /dashboard/tab4/timers
      /dashboard/tab3/timers
  */
  .state('tabsController.timers', {
    url: '/timers',
    views: {
      'tab1': {
        templateUrl: 'templates/timers.html',
        controller: 'timersCtrl'
      },
      'tab4': {
        templateUrl: 'templates/timers.html',
        controller: 'timersCtrl'
      },
      'tab3': {
        templateUrl: 'templates/timers.html',
        controller: 'timersCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/dashboard',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.searchByEmergency', {
    url: '/serchbyemergency',
    views: {
      'tab1': {
        templateUrl: 'templates/searchByEmergency.html',
        controller: 'searchByEmergencyCtrl'
      }
    }
  })

  .state('searchByVitals', {
    url: '/searchbyvitals',
	params: {
		vitalId: "{{v.id}}"		
},
    templateUrl: 'templates/searchByVitals.html',
    controller: 'searchByVitalsCtrl'
  })

  .state('tabsController.searchBySymptoms', {
    url: '/searchbysymptoms',
    views: {
      'tab1': {
        templateUrl: 'templates/searchBySymptoms.html',
        controller: 'searchBySymptomsCtrl'
      }
    }
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('palliativeCare', {
    url: '/palliativecare',
    templateUrl: 'templates/palliativeCare.html',
    controller: 'palliativeCareCtrl'
  })

  .state('tabsController.howToGuides', {
    url: '/howtoguides',
    views: {
      'tab1': {
        templateUrl: 'templates/howToGuides.html',
        controller: 'howToGuidesCtrl'
      }
    }
  })

  .state('survivalGuides', {
    url: '/survivalguides',
    templateUrl: 'templates/survivalGuides.html',
    controller: 'survivalGuidesCtrl'
  })

  .state('urgentCare', {
    url: '/urgentcare',
    templateUrl: 'templates/urgentCare.html',
    controller: 'urgentCareCtrl'
  })

$urlRouterProvider.otherwise('/dashboard/tab3/timers')

  

});