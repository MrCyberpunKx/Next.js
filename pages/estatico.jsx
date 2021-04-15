export const getStaticProps = async () => {
        const resp = await fetch('http://localhost:3000/api/random')
        const data = await resp.json()
    
    return {
        revalidate: 15, // 10 segundos
        props: {
            valor: data.valor
        }
    }
}

const Estatico = props => {
    return (
        <div>
            <h1>Conteúdo Estático</h1>
            <h2>Último valor = {props.valor}</h2>
        </div>
    )
}

export default Estatico;