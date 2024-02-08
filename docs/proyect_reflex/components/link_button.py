import reflex as rx
import proyect_reflex.styles.styles as styles

def link_button(name: str,body: str, url: str,image:str) -> rx.Component:
    # configuracion de boton en el cual se enva a los links de cada red
    return rx.link(
        rx.button(
            rx.hstack(
                rx.image(
                    src=image,
                    margin=styles.Size.MEDIUM.value,
                    width=styles.Size.BIG.value,
                    height=styles.Size.BIG.value,
                ),
                rx.vstack(
                rx.text(name, style = styles.button_tittle_style),
                rx.text(body, style = styles.button_text_style),
                    align_items="start"
                )


            )
        ),
        href=url,
        is_external=True,
        width="100%"

    )
