import "./ContainerMain.css"

function ContainerMain ({children}) {
    return (
        <section>
            <section className="container_main">
                {children}
            </section>
        </section>
    )
}

export { ContainerMain }