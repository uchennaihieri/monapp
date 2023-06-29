import { extendTheme } from '@chakra-ui/react';
import { tabsTheme } from './components/Tabs'



const theme = extendTheme({
    components: {
        Checkbox: {
            variants: {
                circular: {
                    control: {
                        rounded: "full"
                    }
                },
            },
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
        Radio: {
            variants: {
                long: {

                    container: {
                        w: '100%',
                        h: '3rem',
                        border: '1px solid #CDCDCD',
                        borderRadius: '4px',
                        px: '18px',
                    },
                    control: {
                        _checked: {
                            bg: 'black',
                            color: 'black',
                            borderColor: "",
                        },
                        _hover: {
                            bg: '',
                            color: '',
                            borderColor: "",
                        }

                    }

                },
                blackCircle: {
                    control: {
                        _checked: {
                            bg: 'black',
                            color: 'black',
                            borderColor: "",
                        },
                        _hover: {
                            bg: '',
                            color: '',
                            borderColor: "",
                        }

                    }

                }
            }

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
        Tabs: tabsTheme,
    },

});

export default theme;
