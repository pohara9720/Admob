/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button
} from 'react-native';

import { 
  AdMobBanner, 
  AdMobInterstitial, 
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  ad(){
       AdMobInterstitial.setAdUnitID('ca-app-pub-9787447901194797/5940305243');
      AdMobInterstitial.setTestDeviceID('SIMULATOR');
      AdMobInterstitial.requestAd(AdMobInterstitial.showAd);
    }
  render() {
    



    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        
          <AdMobBanner
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-3940256099942544/6300978111"
              testDeviceID='EMULATOR'
              didFailToReceiveAdWithError={this.bannerError} />
              <AdMobBanner
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-9787447901194797/5261648398"
              testDeviceID='EMULATOR'
              didFailToReceiveAdWithError={this.bannerError} />
              

          <PublisherBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-9787447901194797/5261648398"
                testDeviceID='SIMULATOR'
                didFailToReceiveAdWithError={this.bannerError}
                admobDispatchAppEvent={this.adMobEvent} />

           <Button
           title={"btn"}
           onPress={this.ad} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
