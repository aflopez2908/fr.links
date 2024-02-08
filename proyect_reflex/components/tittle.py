import reflex as rx
import proyect_reflex.styles.styles as styles
import proyect_reflex.styles.colors as colors

def tittles(text :str) -> rx.Component:
    return rx.heading(
        text,
        style=styles.tittle_style,
        size="lg",
        color=colors.TextColor.HEADER.value,
        font_family=styles.font.DEFAULT_T.value

    )