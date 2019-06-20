import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import style from '../Styles/AllStyle';

export default class AboutTexts extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={style.title}>About us</Text>
                </View>
                <View style={style.article}>
                    <Text>Developers everywhere. This app gives you an handful of developers in Github
                    Lorem ipsum dolor sit amet, sed pellentesque. Orci posuere vestibulum ligula.
                    Curae auctor lobortis, eu donec aptent. Vivamus ante a exercitation eleifend,
                    sit luctus nullam parturient nec arcu, at sed aliquam, lacus nam feugiat vestibulum 
                    quisque inceptos duis,
                    libero egestas aenean. Eros vehicula nisl vivamus eget diam, mollis pellentesque sapien 
                    aenean, non facilisis ac aenean. Sit pretium, dolor et enim non eleifend nulla, dui duis 
                    duis imperdiet id faucibus. Rutrum arcu nulla eget, massa maecenas, sodales mauris nec. 
                    \Posuere curabitur praesent at duis, quod id cupidatat amet vel wisi, non sollicitudin dui 
                    pellentesque elit erat aliquet, justo cupiditate per augue lobortis. Aptent laoreet litora 
                    nulla viverra curabitur.
                    Est placerat amet. Et vestibulum commodo aenean wisi. Aenean elit neque erat vitae odio.
                    </Text>
                </View>

            </View>
        );
    }
}
