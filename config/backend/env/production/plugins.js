module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env("629962221614574"),
          api_key: env("629962221614574"),
          api_secret: env("25Q7AnxjJpoHH1JG9a8C_UWThfk"),
        },
      },
    },
  });
