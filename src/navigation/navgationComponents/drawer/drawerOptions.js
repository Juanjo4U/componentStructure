const style = {
    fontWeight: 'bold',
}

export default [
    {
        label: 'menu_profile',
        icon: 'user-alt',
        action: () => { },
        style,
    },
    {
        label: 'text_fit_status',
        icon: 'chart-area',
        action: () => { },
        style,
    },
    {
        label: 'menu_objectives',
        icon: 'trophy',
        action: () => { },
        style,
    },
    {
        label: 'menu_zones',
        icon: 'signal',
        action: () => { },
        style,
    },
    {
        label: 'menu_importfile',
        icon: 'cloud-upload-alt',
        action: () => { },
        style,
    },
    {
        label: 'menu_glossary',
        icon: 'book',
        action: () => { },
        style,
    },
    {},
    {
        label: "menu_logout",
        icon: 'sign-out-alt',
        action: (navigate) => { navigate('test') },
        style,
    }
]
