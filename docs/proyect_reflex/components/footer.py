import reflex as rx
from proyect_reflex.styles.colors import TextColor
from proyect_reflex.styles.styles import Size
from proyect_reflex.styles.styles import font
import proyect_reflex.styles as styles
import proyect_reflex.styles.colors as colors


def footer() -> rx.Component:
    return rx.vstack(
        rx.text("F R",size="lg",

                color=colors.TextColor.HEADER.value,
                font_family=styles.styles.font.DEFAULT.value,
                font_size=Size.BIG.value,
                border="4px",
                padding="1rem"
                ),
        rx.text("©Todos los derechos reservados",
                font_size=Size.MEDIUM.value),

        rx.text(
            "una pagina hecha con amor <3",
            font_size=Size.MEDIUM.value
        ),
        margin=Size.BIG.value,
        color=TextColor.FOOTER.value,
        font_family=font.OPTIONAL2.value

    )
