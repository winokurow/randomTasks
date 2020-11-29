import {NavigationContainerRef} from '@react-navigation/native';
import * as React from 'react';
import {boundClass} from 'autobind-decorator';

class NavigationService {
    instance = React.createRef<NavigationContainerRef>();

    dispatch(action) {
        this.instance.current?.dispatch(action)
    }

    getInstance() {
        return this.instance?.current
    }

    canGoBack() {
        return this.getInstance()?.canGoBack()
    }

    navigate(routeName: string, params: any) {
        return this.getInstance()?.navigate(routeName, params)
    }

}

export default new NavigationService()
