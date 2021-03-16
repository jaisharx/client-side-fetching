import styled from 'styled-components';

const Pokemon = styled.div`
    max-width: 80rem;
    margin: 0 auto;

    background-color: #eee;
    padding: 1rem 2rem;
    margin-top: 4rem;
    border-radius: 4px;

    h1 {
        font-weight: 300;
        font-size: 4rem;
    }

    p {
        line-height: 1.6;
    }

    img {
        width: 14rem;
    }
`;

export default function StaicGeneration({ data }) {
    return (
        <Pokemon>
            <h1>hello {data.name}!</h1>
            <p>URL: {data.location_area_encounters}</p>
            <img src={data.sprites.front_default} alt={data.name} />
        </Pokemon>
    );
}

export async function getStaticProps() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
    const data = await res.json();

    return {
        props: { data },
    };
}
