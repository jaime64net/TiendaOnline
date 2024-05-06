import { ReactElement } from "react"

type Props = {
    name: 'foo'
}
function Layout(props: { children: ReactElement<Props> }) {
    return (
        <div className='flex flex-col mt-20 items-center'>
            {props.children}
        </div>
    )
}

export default Layout