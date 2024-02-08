import reflex as rx
from proyect_reflex.components.link_button import link_button
from proyect_reflex.components.tittle import tittles
import proyect_reflex.styles.styles as style
import proyect_reflex.views.links.url as url




def links() -> rx.Component:
    return rx.vstack(
        tittles("Laboral"),
        link_button("likelind", "Un poco de mi vida laboral",
                    url.LILEKILND,"/linkelnd.svg"),
        link_button("Github", "mira mis proyectos", url.GITHUB,"/github.svg"),
        link_button("Portafolio", "Conoceme un poco mejor", "##","/portafolio.svg"),
        link_button("CV", "Conoce mi experiencia a fondo", "/hoja de vida alvaro felipe lopez russi .pdf", "/cv.svg"),
        tittles("Contactame"),
        link_button("Email", url.EMAIL,
                    f"mailto:{url.EMAIL}","/email.svg"),
        link_button("Whatsapp", "Escribeme con respuesta casi inmediata",
                    url.WHATSAPP,"/whatsapp.svg"),


        width="100%",
        spacing=style.Size.DEFAULT.value,



    )
