using System.Reflection;
using Test.Models.Enums;
using Test.Models.GymData.Enums;

namespace Test.Utils;

public static class Utils
{
    public static double CalculateBmiValue(int weight, int height)
    {
        double bmiBrute = (double)weight/height/height*10000;
        return Math.Round(bmiBrute, 1);
    }
    public static BmiChart CalculateBmiIndex(double bmi)
    {
        return bmi switch
        {
            <= 16 => BmiChart.SevereThinness,
            > 16 and <= 17 => BmiChart.ModerateThinness,
            > 17 and <= 18.5 => BmiChart.MildThinness,
            > 18.5 and <= 25 => BmiChart.Normal,
            > 25 and <= 30 => BmiChart.Overweight,
            > 30 and <= 35 => BmiChart.ObeseClassI,
            > 35 and <= 40 => BmiChart.ObeseClassII,
            _ => BmiChart.ObeseClassIII
        };
    }

    public static BodyFatIndex CalculateBodyFatIndex(double bodyFatPercentage, Gender gender)
    {
        if (gender == Gender.Female)
        {
            return bodyFatPercentage switch
            {
                >= 10 and < 13 => BodyFatIndex.EssentialFat,
                >= 13 and < 20 => BodyFatIndex.Athletes,
                >= 20 and < 24 => BodyFatIndex.Fitness,
                >= 24 and < 31 => BodyFatIndex.Acceptable,
                > 31 => BodyFatIndex.Obese,
                _ => BodyFatIndex.Impossible
            };
        }

        return bodyFatPercentage switch
        {
            >= 2 and < 5 => BodyFatIndex.EssentialFat,
            >= 5 and < 13 => BodyFatIndex.Athletes,
            >= 13 and < 17 => BodyFatIndex.Fitness,
            >= 17 and < 24 => BodyFatIndex.Acceptable,
            > 24 => BodyFatIndex.Obese,
            _ => BodyFatIndex.Impossible
        };
    }

    public static double CalculateBodyFatPercentage(double bmi, Gender gender, int age)
    {
        var genderVariable = gender == Gender.Female ? 5.4 : 16.2;
        var bruteFat = 1.2 * bmi + 0.23 * age - genderVariable;
        return Math.Round(bruteFat, 1);
    }

    public static string ConvertToJsonString(object obj)
    {
        Dictionary<string, string> myDict = new Dictionary<string, string>();
        foreach (PropertyInfo prop in obj.GetType().GetProperties())
        {
            myDict.Add(prop.Name, prop.GetValue(obj, null).ToString());
        }
        var textBox = Newtonsoft.Json.JsonConvert.SerializeObject(myDict);
        return textBox;
    }
}