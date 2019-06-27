FROM python:3.7-alpine

RUN apk add --no-cache gcc musl-dev autoconf automake make postgresql-dev python3-dev libffi-dev

RUN mkdir /build
COPY ta-lib-0.4.0-src.tar.gz /build
COPY requirements.txt /build

WORKDIR /build
RUN tar -xzf ta-lib-0.4.0-src.tar.gz

WORKDIR /build/ta-lib/
RUN ./configure --prefix=/usr
RUN make
RUN make install

WORKDIR /build
RUN pip3 install -r requirements.txt

WORKDIR /
RUN rm -rf /build

