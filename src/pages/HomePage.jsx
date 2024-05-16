import { DefaultLayout } from "../layouts/Default";

export const HomePage = () => {
    return (
        <DefaultLayout>
            <div className='container-center'>
                <h1>Welcome to the Home Page!</h1>
                <p>This is the content of the home page.</p>
            </div>
        </DefaultLayout>
    );
}
