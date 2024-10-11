FROM flutter:latest as builder

WORKDIR /app

COPY pubspec.yaml .
RUN flutter pub get

COPY . .

RUN flutter build web --release --web-renderer html

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 87

CMD ["nginx", "-g", "daemon off;"]