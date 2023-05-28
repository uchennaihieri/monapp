import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    components: {
        Checkbox: {
            baseStyle: {
                control: {
                    borderRadius: '2px',
                    _checked: {
                        bg: 'black',
                        border: 'black'
                    },
                },

            },
        },
        Switch: {
            variants: {
                custom: {

                    track: {
                        bg: '#D9D9D9',

                        _checked: {
                            bg: '#000000',
                        },
                    },
                    thumb: {
                        bg: 'rgba(0, 0, 0, 0.4)',

                        _checked: {
                            bg: '#FFFFFF',
                        },
                    },
                },
            },
        },
    },

});

export default theme;
