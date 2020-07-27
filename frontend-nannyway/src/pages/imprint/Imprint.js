import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import NannyAppBar from "../../components/header/NannyAppBar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FooterImprint from "../../components/footer/FooterImprint";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: "Finger Paint",
        color: myTheme.palette.info.dark,
    },
    headingImprint: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        color: myTheme.palette.info.light,
    },
    basictypo: {
        fontFamily: "Open Sans",
        color: myTheme.palette.info.light,
    },
    image: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1530036067142-31e9b88da9b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "right",
        minHeight: '72vh',
    },
    paperTop: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.primary.main,
        fontFamily: "Open Sans",
        marginBottom: "20px",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.success.dark,
        marginBottom: 10,
    },
}));

export default function Imprint() {
    const classes = useStyles();

    return (
        <div>
            <NannyAppBar colorStyle={"primary"}/>
            <main>
                <div className={classes.image}>
                    <Paper className={classes.paperTop}>
                        <Typography variant={"h4"} className={classes.heading}>
                            Impressum
                        </Typography>
                    </Paper>
                    <Grid container spacing={3}
                          direction="row"
                          justify="space-around"
                          alignItems="center">
                        <Grid item xs={10}>
                            <Paper className={classes.paper}>
                                <Typography align={"left"} className={classes.headingImprint}>
                                    Verantwortlich für den Inhalt dieser Seiten:
                                </Typography>
                            <Typography paragraph />
                            <Typography align={"left"} className={classes.basictypo}>
                                Carolin Janshen
                            </Typography>
                            <Typography align={"left"} className={classes.basictypo}>
                                Ölbergstraße 1
                            </Typography>
                            <Typography align={"left"} className={classes.basictypo}>
                                93173 Wenzenbach
                            </Typography>
                                <Typography paragraph/>
                                <Typography align={"left"} className={classes.headingImprint}>
                                    Kontakt:
                                </Typography>
                            <Typography align={"left"} className={classes.basictypo}>
                                caro.janshen@gmail.com
                            </Typography>
                            <Typography paragraph/>
                            <Typography align={"left"} className={classes.headingImprint}>
                                Haftung für Inhalte:
                            </Typography>
                            <Typography align={"left"} className={classes.basictypo}>
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                            </Typography>
                                <Typography paragraph/>
                                <Typography align={"left"} className={classes.headingImprint}>
                                    Haftung für Links:
                                </Typography>
                                <Typography align={"left"} className={classes.basictypo}>
                                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                                </Typography>
                                <Typography paragraph/>
                                <Typography align={"left"} className={classes.headingImprint}>
                                    Urheberrecht:
                                </Typography>
                                <Typography align={"left"} className={classes.basictypo}>
                                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                                </Typography>
                                <Typography paragraph/>
                                <Typography align={"left"} className={classes.headingImprint}>
                                    Quellenangaben:
                                </Typography>
                                <Typography align={"left"} className={classes.basictypo}>

                                </Typography>
                            </Paper>

                        </Grid>
                    </Grid>
                </div>
            </main>
            <FooterImprint colorStyle={"primary"}/>
        </div>
)
}