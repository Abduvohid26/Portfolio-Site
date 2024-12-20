FROM python:3.11.4-slim-buster

RUN addgroup --system abduvohid && adduser --system --group abduvohid

WORKDIR /portfolio

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt-get update && apt-get install -y netcat


RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt


COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /portfolio/entrypoint.sh
RUN chmod +x /portfolio/entrypoint.sh



RUN mkdir staticfiles

COPY . .

RUN chown -R abduvohid:abduvohid /portfolio

USER abduvohid


ENTRYPOINT ["sh", "/portfolio/entrypoint.sh"]
