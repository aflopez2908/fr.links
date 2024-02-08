import reflex as rx
from proyect_reflex.components.footer import footer
from proyect_reflex.views.header.header import header
from proyect_reflex.views.links.links import links
import proyect_reflex.styles.styles as styles


# es la encargada de generar estados en el proyecto
class State(rx.State):
    pass


# esta funcion es la que lanza el index de nuestra pagina
# retornamos un componente para ser pintado en pantalla

def index() -> rx.Component:
    return rx.box(
        rx.center(
        rx.vstack(
            header(),
            links(),
            #styles
            max_width= styles.MAX_WIDTH,
            width="100%",
            margin_y = styles.Size.BIG.value
        )
        ),

        footer()

    )


# instanciamos como app en donde generamos una pagina con un componente
app = rx.App(
    stylesheets=styles.stylesheets,
    style=styles.BASE_STYLE

)
app.add_page(index,
             title="Felipe Russi center",
             description="Soy ingeniero y economista en formaciòn",
             image="avatar.png"

             )
app.compile()
