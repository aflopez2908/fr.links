import reflex as rx
from proyect_reflex.components.info_text import info_text
import proyect_reflex.styles.styles as style
import proyect_reflex.styles.colors as colors
from proyect_reflex.components.link_icon import link_icon
from proyect_reflex.styles.styles import Size


def header() -> rx.Component:
    return rx.vstack(rx.hstack(
        rx.avatar(src="/avatar.png", fallback="RX", size="xl",

                  border = "4px",

                  ),

        rx.vstack(rx.heading("Felipe Russi", size="xl",
                             color=colors.TextColor.HEADER.value,
                             font_family=style.font.DEFAULT.value,
                             margin_left="3rem",
                             border="4px",
                             padding="1rem"
                             ),
                  #rx.text("@felperussi",font_family=style.font.DEFAULT.value),
                  rx.hstack(
                      # instagram
                      link_icon("https://www.instagram.com/felipe_23_14/","/instagram.svg"),

                      link_icon("https://www.instagram.com/felipe_23_14/","/facebook.svg"),

                      link_icon("https://www.instagram.com/felipe_23_14/","/tiktok.svg"),

                      link_icon("https://www.instagram.com/felipe_23_14/","/x.svg")
                  ),
                  margin_rigth="1em",
                  color=colors.TextColor.HEADER.value

                  ),



    ),
        rx.flex(
            info_text("+2", " años de experiencia"),
            rx.spacer(),
            info_text("2", " carreras estudiadas"),
            rx.spacer(),
            info_text("+10", " proyectos en proceso"),
            width="100%",
            color=colors.TextColor.HEADER.value,
            font_family=style.font.OPTIONAL2.value,
            font_size="1.4rem",

            margin_botton="1rem""!important"
        ),

        rx.vstack(rx.text("""mi nombre es felipe russi y soy un estudiante de ingenieria de sistemas que no le gusta esperar a aprender en
                la universidad asi que quizo aprender por si solo durante toda una vida""", color=colors.TextColor.HEADER.value),
                  text_align="justify",
                  font_family=style.font.OPTIONAL2.value,
                  font_size="1.5em"),



        align_items="start",
        spacing=Size.BIG.value

    )
