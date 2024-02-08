import reflex as rx
import proyect_reflex.styles.styles as styles



def link_icon(url: str, img: str) -> rx.Component:
    return rx.link(
        rx.image(src=img,
                 width=styles.Size.DEFAULT.value,
                 margin_left=styles.Size.BIG.value
                 ),
        href=url,
        is_external=True,

    )
