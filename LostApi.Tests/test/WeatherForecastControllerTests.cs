// LostApi.Tests/WeatherForecastControllerTests.cs
using Xunit;
using FluentAssertions;
using LostApi.Controllers;

public class WeatherForecastControllerTests
{
    [Fact]
    public void GetWeatherForecast_ReturnsCorrectForecast()
    {
        var controller = new WeatherForecastController();
        var result = controller.Get();

        result.Should().NotBeNull();
        result.Length.Should().Be(5);
    }
}
