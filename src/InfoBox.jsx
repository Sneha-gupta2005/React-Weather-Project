import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

  return (
    <div className="InfoBox">
      <h1>WeatherInfo={info.weather}</h1>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p> Temperature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Min Temp={info.tempMin}&deg;C</p>
              <p> Temp Ma{info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like{info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
