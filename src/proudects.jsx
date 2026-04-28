import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Games() {
  const navigate = useNavigate();

  const games = [
    { name: "GTA V", img: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg" },
    { name: "Cyberpunk 2077", img: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg" },
    { name: "Red Dead Redemption 2", img: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg" },
    { name: "Elden Ring", img: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg" },
    { name: "The Witcher 3", img: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg" },
    { name: "Resident Evil 4", img: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg" },
    { name: "FIFA 23", img: "https://cdn.akamai.steamstatic.com/steam/apps/1811260/header.jpg" },
    { name: "Call of Duty MW2", img: "https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg" },
    { name: "Battlefield 2042", img: "https://cdn.akamai.steamstatic.com/steam/apps/1517290/header.jpg" },
    { name: "PUBG", img: "https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg" },

    { name: "Fortnite", img: "https://cdn2.unrealengine.com/egs-fortnite-chapter4season4-carousel-desktop-1920x1080-4f1cba81c6dc.jpg" },
    { name: "God of War", img: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg" },
    { name: "Horizon Zero Dawn", img: "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg" },
    { name: "Spider-Man Remastered", img: "https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg" },
    { name: "Days Gone", img: "https://cdn.akamai.steamstatic.com/steam/apps/1259420/header.jpg" },
    { name: "Far Cry 6", img: "https://cdn.akamai.steamstatic.com/steam/apps/2369390/header.jpg" },
    { name: "Watch Dogs 2", img: "https://cdn.akamai.steamstatic.com/steam/apps/447040/header.jpg" },
    { name: "Need for Speed Heat", img: "https://cdn.akamai.steamstatic.com/steam/apps/1222680/header.jpg" },
    { name: "Forza Horizon 5", img: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg" },
    { name: "Dying Light 2", img: "https://cdn.akamai.steamstatic.com/steam/apps/534380/header.jpg" },

    { name: "Minecraft", img: "https://cdn.akamai.steamstatic.com/steam/apps/1789480/header.jpg" },
    { name: "Among Us", img: "https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg" },
    { name: "Fall Guys", img: "https://cdn.akamai.steamstatic.com/steam/apps/1097150/header.jpg" },
    { name: "Valorant", img: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad2a9a0d7d3b0e13/valorant.jpg" },
    { name: "CS2", img: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg" },
    { name: "Apex Legends", img: "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg" },
    { name: "Rainbow Six Siege", img: "https://cdn.akamai.steamstatic.com/steam/apps/359550/header.jpg" },
    { name: "Overwatch 2", img: "https://cdn.akamai.steamstatic.com/steam/apps/2357570/header.jpg" },
    { name: "ARK Survival", img: "https://cdn.akamai.steamstatic.com/steam/apps/346110/header.jpg" },
    { name: "Rust", img: "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg" }
  ];

  return (
    <Box sx={{ padding: "40px" }}>
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: "bold"
        }}
      >
        Choose Your Game 🎮
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4
        }}
      >
        {games.map((game, index) => (
          <Card
            key={index}
            sx={{
              width: 260,
              borderRadius: "15px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)"
              }
            }}
          >
            <CardMedia
              component="img"
              height="150"
              image={game.img}
            />

            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {game.name}
              </Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  background: "#0f172a",
                  "&:hover": { background: "#1e293b" }
                }}
                onClick={() =>
                  navigate(`/check/${game.name.replace(/\s+/g, "").toLowerCase()}`)
                }
              >
                Check now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}