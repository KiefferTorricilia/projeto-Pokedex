


export const goToListPage = (navigate, set) =>{
    navigate('/')
    set(0)
}

export const goToPokedex = (navigate, set) => {
    navigate('/pokedex')
    set(1)
}

export const goToDetails = (navigate, set) => {
    navigate('/details')
    set(2)
}