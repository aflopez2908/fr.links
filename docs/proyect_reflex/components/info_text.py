import reflex as rx
import proyect_reflex.styles.styles as style


def info_text(tittle: str, text: str) -> rx.Component:
    return rx.box(
        rx.span(tittle, font_weight="bold"),
        text,

        font_size=style.Size.MEDIUM.value
    )
