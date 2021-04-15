import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
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

    a {
        display: block;
        font-size: 2rem;
    }
`;

export default function Home() {
    return (
        <Container>
            <h1>Routes</h1>

            <Link href="/csr">
                <a>1. Client Side data fetching</a>
            </Link>

            <Link href="/ssg">
                <a>2. Static Generation</a>
            </Link>

            <Link href="/ssr">
                <a>3. Server Side rendering</a>
            </Link>
        </Container>
    );
}
