FROM golang:1.17-alpine as builder
WORKDIR /app 
COPY go.mod ./
COPY go.sum ./
RUN go mod download
COPY *.go ./
RUN CGO_ENABLED=0 go build
